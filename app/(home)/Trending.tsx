'use client'
import React from 'react'
import TrendingCard from '../(shared)/TrendingCard'
type Props = {}

const Trending = (props: Props) => {
  return (
    <section className="pt-3 pb-10">
      <div className="flex items-center gap-3">
        <div className="bg-wh-900 py-2 px-8 text-wh-10 text-sm font-bold">
          TRENDING
        </div>
        <p className="text-sm">
          Ut amet ea dolores sed sit eos lorem clita. Rebum tempor dolores et
          vero est. Dolores dolor dolor amet et,.
        </p>
      </div>
      {/* <div className='flex justify-between gap-3 my-3'>
        <div className='basis-1/2 bg-wh-500 h-96'></div>
        <div className='flex flex-col basis-1/2 h-96 gap-3'>
          <div className='basis-1/2 bg-wh-500'></div>
          <div className='flex basis-1/2 gap-3'>
            <div className='basis-1/2 bg-wh-500'></div>
            <div className='basis-1/2 bg-wh-500'></div>
          </div>
        </div>
      </div> */}
      <div className='sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3'>
        <TrendingCard className='bg-wh-500 col-span-2 row-span-2'></TrendingCard>
        <TrendingCard className='bg-wh-500 col-span-2 row-span-1'></TrendingCard>
        <TrendingCard className='bg-wh-500 col-span-1 row-span-1'></TrendingCard>
        <TrendingCard className='bg-wh-500 col-span-1 row-span-1'></TrendingCard>

      </div>
    </section>
  )
}

export default Trending
