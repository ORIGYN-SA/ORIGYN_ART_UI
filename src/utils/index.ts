import { theme, GlobalStyle } from "./theme";

const numberWithCommas = (number: number, separator = ",") => {
  // Split float on "."
  const numbers = number.toString().split(".");

  // TODO: consider adding comas to amount >0&<1
  return numbers[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator) + (numbers[1] ? `.${numbers[1]}` : "");
}

export const disableSmoothScroll = (duration = 1000) => {
  const html = document.querySelector('html')!
  html.style.scrollBehavior = 'auto'
  setTimeout(() => {
    html.style.scrollBehavior = ''
  }, duration)
}

export const isOneOf = (value: any, allowedValues: any[]) => {
  if (allowedValues.indexOf(value) !== -1) {
    return true
  }
  return false
}

export const getErrorMessage = (
  err: any,
  fallBackMessage = 'The request failed!'
) => {
  return err?.response?.data?.message
    ? err?.response?.data?.message
    : err.message
    ? err.message
    : fallBackMessage
}

export const imageFileToDataURL = (
  file: any,
  callback: (dataURL: string) => void
) => {
  const reader = new FileReader() as FileReader

  reader.onloadend = () => {
    const dataURL = reader.result as string
    callback?.(dataURL)
  }
  reader.readAsDataURL(file as any)
}

export const imageFileToBase64String = (
  file: any,
  callback: (base64String: string) => void
) => {
  const reader = new FileReader() as FileReader
  reader.onloadend = () => {
    const dataURL = reader.result as string
    const base64String = dataURL.replace('data:', '').replace(/^.+,/, '')
    callback?.(base64String)
  }
  reader.readAsDataURL(file as any)
}


export const getKB = (obj: any) => {
  const bytes = new Blob([JSON.stringify(obj)]).size
  const kilobytes = Math.round(bytes / 1000)
  return kilobytes
}

export const propInObj = (prop: string, obj: Record<any, any>) => {
  return prop in obj
}

export const docToObj = (doc: any) => {
  doc._id = doc._id.toString()
  if (doc.createdAt) {
    doc.createdAt = doc.createdAt.toString()
  }
  if (doc.updatedAt) {
    doc.updatedAt = doc.updatedAt.toString()
  }
  return doc
}

export const formatDate = (date: any) => {
  return new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

export {
  theme,
  GlobalStyle,
  numberWithCommas,
}