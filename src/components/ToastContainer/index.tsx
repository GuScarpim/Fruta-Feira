/* eslint-disable react/require-default-props */
import React from 'react'
import {
  ToastContainer as OriginalToastContainer,
  ToastContainerProps,
} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const defaultStyle: React.CSSProperties = {
  zIndex: 9999,
}

const ToastContainer: React.FC<ToastContainerProps> = props => (
  <OriginalToastContainer
    autoClose={5000}
    hideProgressBar={false}
    position="top-right"
    style={defaultStyle}
    closeOnClick
    draggable
    pauseOnHover
    {...props}
  />
)

export default ToastContainer
