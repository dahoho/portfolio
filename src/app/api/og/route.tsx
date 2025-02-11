import { NEXT_PUBLIC_BASE_URL } from '@/config'
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
            position: 'relative',
            background:
              ' linear-gradient(90deg, rgba(251, 213, 251, 1), rgba(149, 233, 243, 1));',
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
              width: '95%',
              height: '90%',
              background: '#fff',
              display: 'flex',
              justifyContent: 'center',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              borderRadius: '20px',
              padding: '60px 0',
            }}
          >
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{
                  width: '100%',
                  fontSize: 60,
                  fontStyle: 'normal',
                  fontWeight: 'bold',
                  color: '#000',
                  padding: '0 60px',
                  lineHeight: 1.5,
                  marginBottom: '30px',
                  wordWrap: 'break-word',
                }}
              >
                {title}
              </div>

              <div
                style={{
                  width: '100%',
                  fontSize: 40,
                  fontStyle: 'normal',
                  fontWeight: 'bold',
                  color: '#000',
                  padding: '0 60px',
                  lineHeight: 1.3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 20,
                }}
              >
                <span
                  style={{
                    display: 'block',
                    backgroundImage: `url(${NEXT_PUBLIC_BASE_URL}/profile.png)`,
                    backgroundSize: '100% 100%',
                    height: 80,
                    width: 80,
                    borderRadius: '50%',
                  }}
                ></span>
                <span>hodii.dev</span>
              </div>
            </div>
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
