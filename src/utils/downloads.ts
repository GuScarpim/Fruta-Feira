/* eslint-disable no-restricted-syntax */

export const downloadPdfFile = (content: string, filename: string): void => {
  const element = document.createElement('a')
  const file = new Blob([content], { type: 'application/pdf' })
  element.href = URL.createObjectURL(file)
  element.download = filename
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}

export const deepCloneWithStyles = (node: HTMLElement) => {
  const style = document.defaultView?.getComputedStyle(node, null)
  const clone = node.cloneNode(false) as HTMLElement
  if (clone.style && style?.cssText) clone.style.cssText = style.cssText
  for (const child of node.childNodes) {
    if (child.nodeType === 1) { clone.appendChild(deepCloneWithStyles(child as HTMLElement)) } else clone.appendChild((child as Node).cloneNode(false))
  }
  return clone
}

export const printFunction = ({ refsToPrint }: any) => {
  const printWindow = window.open('', '', 'height=400,width=800')
  if (printWindow) {
    printWindow.document.write(
      "<html><head><title>Page Title</title></head><body id='print-body'>",
    )
    const body = printWindow.document.getElementById('print-body')
    refsToPrint.forEach((ref: { current: HTMLElement }) => {
      if (ref.current) {
        const clone = deepCloneWithStyles(ref.current)
        body?.appendChild(clone)
      }
    })
    printWindow.document.write('</body></html>')
    printWindow.document.close()
    printWindow.print()
  }
}
