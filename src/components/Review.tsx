import { BsThreeDots } from "react-icons/bs";
import { IconType } from 'react-icons';
import { FaCheckCircle } from "react-icons/fa";

interface Props {
  review: {
    name: string;
    stars: IconType[];
    desc: string
  }
  count?: number
}

const Review = ({ review, count }: Props) => {
  return (
    <div className='w-[90vw] md:w-[45vw]  border-[1px] rounded-2xl p-6  space-y-2'>
      <div className='flex justify-between'>
        <div className='flex gap-1'>{review.stars.map((Icon:any, index:number) => (<Icon key={index} className='text-yellow-500'/>))}</div>
        {count === 200 && <BsThreeDots />}
      </div>
        <h3 className='flex gap-2 items-center'>{review.name}<FaCheckCircle className='text-green-600'/></h3>
        <p className={``}>{review.desc}</p>
        {count === 200 &&
        <p>Published on August 14, 2023 </p>
        }
    </div>
  )
}

export default Review;