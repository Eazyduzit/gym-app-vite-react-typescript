type Props = {
  image: string
  name: string
  description: string
}

const Class = ({ image, name, description }: Props) => {
  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div>
        <p>{name}</p>
        <p>{description}</p>
      </div>
      <img src={image} alt={`${image}`} />
    </li>
  )
}

export default Class
