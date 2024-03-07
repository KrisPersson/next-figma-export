import localFont from 'next/font/local'

export const archia = localFont({
    src: [
      {
        path: './fonts/Archia-Regular.woff2',
        weight: '400',
        style: 'normal',
      },
      {
        path: './fonts/Archia-Medium.woff2',
        weight: '500',
        style: 'normal',
      },
      {
        path: './fonts/Archia-SemiBold.woff2',
        weight: '600',
        style: 'normal',
      },
      {
        path: './fonts/Archia-Bold.woff2',
        weight: '700',
        style: 'normal',
      },
    ]
  })