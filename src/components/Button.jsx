export default function Button({ onClick, type = "button", children }) {
  return (
    <button className="text-white text-lg font-medium bg-moderate-blue px-4 py-1.5 rounded-md"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}