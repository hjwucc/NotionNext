import Link from 'next/link'

/**
 * 上一篇，下一篇文章
 * @param {prev,next} param0
 * @returns
 */
export default function ArticleAround ({ prev, next }) {
  if (!prev || !next) {
    return <></>
  }
  return (
    <section className='text-gray-800 dark:text-gray-400 h-12 flex items-center justify-between space-x-5 my-4'>
      <Link
        href={`/${prev.slug}`}
        passHref
        className='mr-2 mb-4 md:ml-0'>

        <i className='mr-1 fas fa-angle-double-left' />{prev.title}

      </Link>
      <Link
        href={`/${next.slug}`}
        passHref
        className='mr-2 mb-4 md:ml-0'>
        {next.title}
        <i className='ml-1 my-1 fas fa-angle-double-right' />

      </Link>
    </section>
  )
}
