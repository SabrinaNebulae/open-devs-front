// export default function Card({ title, children }) {
//   return (
//     <div className="bg-black border border-white/20 rounded-2xl p-6 text-white max-w-md mx-auto shadow-md">
//       {title && <h2 className="text-2xl font-semibold mb-4">{title}</h2>}
//       <ul>
//         {children.map((child, index) => (
//           <li key={index}>{child.name}</li>
//         ))}
//       </ul>
//     </div>
//     )
// }

export default function Card({ image, title, tags, onClick, onTagClick }) {
  return (
    <div
      onClick={onClick}
      className="clip-path-custom w-64 aspect-square bg-transparent border-2 border-white relative overflow-hidden cursor-pointer text-left"
    >
      {/* Image */}
      <div className="h-2/3 w-full overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>

      {/* Bas : titre + tags */}
      <div className="h-1/3 p-3 flex flex-col justify-between">
        <h3 className="text-lg font-bold">{title}</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                onTagClick && onTagClick(tag);
              }}
              className="bg-white text-black px-2 py-1 text-sm hover:bg-gray-200"
            >
              {tag.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
