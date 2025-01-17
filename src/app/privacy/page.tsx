import { ContainerLayout } from '@/app/components/layout/containerLayout'
import { ButtonItem } from '@/app/lib/mantine'

const Privacy = () => {
  return (
    <>
      <ContainerLayout>
        <p className="leading-8">
          当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。このGoogleアナリティクスはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。
        </p>
        <div className="text-center mt-20">
          <ButtonItem>Back</ButtonItem>
        </div>
      </ContainerLayout>
    </>
  )
}

export default Privacy
