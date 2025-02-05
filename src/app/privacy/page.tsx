import { ContainerLayout } from '@/components/layout/containerLayout/_containers'
import { LinkButton } from '@/components/ui/linkButton'

const Privacy = () => {
  return (
    <ContainerLayout>
      <p className="leading-8">
        当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。このGoogleアナリティクスはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。
      </p>
      <div className="mt-20 flex justify-center">
        <LinkButton path="/">トップに戻る</LinkButton>
      </div>
    </ContainerLayout>
  )
}

export default Privacy
