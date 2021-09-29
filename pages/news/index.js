import {Fragment } from 'react'
import Link from 'next/link'
function News() {
  return (
    <Fragment>
      <ul>
        <li>
        <Link href="/news/news1"> Hi from news 1 </Link>
        </li>
        <li>
          <Link href="/news/news2"> Hi from news 2 </Link>
        </li>
      </ul>
    </Fragment>
  );
}
export default News;
