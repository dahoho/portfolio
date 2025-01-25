import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export const GET = (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url)

    const hasTitle = searchParams.has('title')
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'My default title'

    return new ImageResponse(
      (
        <div
          style={{
            backgroundImage:
              'url(https://portfolio-ryosuke.assets.newt.so/v1/8e7ec721-15ab-4c9e-a8da-001891a8198f/01.webp)',
            backgroundColor: '#fff',
            backgroundSize: '100% 100%',
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'left',
            alignItems: 'flex-start',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
          }}
        >
          <div
            style={{
              width: '100%',
              fontSize: 60,
              fontStyle: 'normal',
              fontWeight: 'bold',
              color: '#000',
              padding: '0 120px',
              lineHeight: 1.3,
              marginBottom: '30px',
              wordWrap: 'break-word',
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (e) {
    console.error(`Error generating image: ${(e as Error).message}`)
    return new Response('Failed to generate the image', {
      status: 500,
    })
  }
}
