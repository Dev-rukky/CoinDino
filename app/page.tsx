import DataTable from '@/components/DataTable'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main className='main-container'>
      <section className='home-grid'>
        <div id='crypto-overview'>
          <div className='header pt-2'>
            <Image src='https://assets.coingecko.com/coins/images/1/large/bitcoin.png' alt='' width={56} height={56} />
            <div className='info'>
              <p>Bitcoin / BTC</p>
              <h1>$93,200.00</h1>
            </div>
          </div>
        </div>
        <p>Trending Crypto</p>
        <DataTable columns={[]} />
      </section>
      <section className='w-full mt-7 space-y-4 '>
          <p>Categories</p>
        </section>
    </main>
  )
}

export default page
