const Header = ({white, name}) => {
  const containerClass = white ? " border border-gray-300  h-8 w-5/12 mb-4 rounded-md flex items-center justify-center" :
    "border border-gray-300  h-8 w-5/12 bg-gray-900  mb-4 rounded-md flex items-center justify-center"
  return (
    <div className={containerClass}>
      <div className="flex items-center">
        <p className="text-xs text-gray-800 dark:text-gray-400 font-normal">{white ? 'White' : 'Black'}: {name}</p>
      </div>
    </div>
    )
}
export default Header
