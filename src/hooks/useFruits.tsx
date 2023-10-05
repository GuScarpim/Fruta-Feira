/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import useFruitStore from '~/store/fruit'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { numberFormat } from '~/utils/formatNumbers'

pdfMake.vfs = pdfFonts.pdfMake.vfs

export const useFruits = () => {
  const [isLoading, setIsLoading] = useState(false)
  const {
    fruits,
    totalValue,
    totalQuantity,
    filteredFruits,
    removeOneFruit,
    addOneFruit,
    setSearchTerm,
  } = useFruitStore()
  const loadFruits = async () => {
    try {
      setIsLoading(true)

      await new Promise((resolve) => {
        setTimeout(resolve, 1000)
      })
    } catch (error) {
      toast.error('Erro ao carregar frutos.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase()
    setSearchTerm(searchTerm)
  }

  const getImageAsDataUrl = async (src: string) => {
    const response = await fetch(src)
    const blob = await response.blob()
    return new Promise((resolve) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result)
      reader.readAsDataURL(blob)
    })
  }

  const generatePDF = async () => {
    const content = await Promise.all(
      fruits
        .filter((fruit) => fruit.quantity > 0)
        .map(async (fruit) => {
          const imageDataUrl = await getImageAsDataUrl(fruit.src)
          return [
            { image: imageDataUrl, width: 50, height: 50 },
            { text: `${fruit.title}`, style: 'fruitTitle' },
            { text: `Quantidade: ${fruit.quantity}`, style: 'fruitInfo' },
            {
              text: `Valor: R$ ${numberFormat(
                String(fruit.value * fruit.quantity),
              )}`,
              style: 'fruitInfo',
            },
            { text: '\n' },
          ]
        }),
    )

    const documentDefinition: any = {
      content: [
        { text: 'Comprovante de Pagamento', style: 'header' },
        ...content.flat(),
        { text: `Quantidade de produtos: ${totalQuantity}`, style: 'header' },
        {
          text: `Valor total: ${numberFormat(String(totalValue))}`,
          style: 'header',
        },
      ],
      styles: {
        header: { fontSize: 18, bold: true, margin: [0, 0, 0, 10] },
        fruitTitle: { fontSize: 16, bold: true, margin: [0, 10, 0, 5] },
        fruitInfo: { fontSize: 14, margin: [0, 0, 0, 5] },
        fruitDescription: { fontSize: 12, margin: [0, 0, 0, 10] },
      },
    }

    pdfMake.createPdf(documentDefinition).download('comprovante_frutaFeira.pdf')
  }

  useEffect(() => {
    loadFruits()
  }, [])

  return {
    isLoading,
    setIsLoading,
    fruits,
    totalQuantity,
    filteredFruits,
    generatePDF,
    removeOneFruit,
    addOneFruit,
    handleChange,
  }
}
