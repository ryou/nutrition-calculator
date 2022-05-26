import type { NextPage } from 'next'
import Link from 'next/link'
import { AnchorButtonComponent } from '../components/abstract/Button/AnchorButtonComponent'
import { pagesPath } from '../.pathpida/$path'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-8">
      <div className="shrink-0 grow">
        <Link href={pagesPath.my_recipe.create.$url()} passHref>
          <AnchorButtonComponent size={'lg'} xSize={'block'} outline>
            Myレシピ作成
          </AnchorButtonComponent>
        </Link>
      </div>
      <div className="shrink-0 grow">
        <Link href={pagesPath.my_recipe.$url()} passHref>
          <AnchorButtonComponent size={'lg'} xSize={'block'} outline>
            Myレシピ一覧
          </AnchorButtonComponent>
        </Link>
      </div>
    </div>
  )
}

export default Home
