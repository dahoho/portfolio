import { InnerLayout } from '@/app/components/layout/inner'
import { Section } from '@/app/components/layout/section'
import { SnsList } from '@/app/components/snsList'
import { Heading } from '@/app/lib/mantine'
import { calculateAge } from '@/app/utils/calculateAge'

const PROFILE_ITEMS = [
  {
    key: '年齢',
    value: `${calculateAge(1994, 8, 20)}歳`,
  },
  {
    key: '出身地',
    value: '茨城県',
  },
  {
    key: '居住地',
    value: '東京都',
  },
  {
    key: '職業',
    value: 'フロントエンドエンジニア',
  },
  {
    key: '趣味',
    value: '筋トレ / ランニング / サウナ / ダーツ',
  },
]

export const Profile = () => {
  return (
    <Section>
      <Heading order={2}>Profile</Heading>
      <InnerLayout>
        <div className="flex flex-col gap-6">
          {PROFILE_ITEMS.map((item) => {
            return (
              <dl key={item.key} className="flex">
                <dt>{item.key}&nbsp;:&nbsp;</dt>
                <dd>{item.value}</dd>
              </dl>
            )
          })}
        </div>
        <SnsList />
      </InnerLayout>
    </Section>
  )
}
