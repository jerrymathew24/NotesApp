

function ShowNotes({ notes }) {
  return (
    <div className="flex gap-4 flex-wrap">
        {notes?.length > 0 &&
          notes.map(({ id, title, text }) => (
            <div
              key={id}
              className="flex flex-col w-[300px] relative border-1 border-gray-500 rounded-sm p-5 mt-5 gap-3"
            >
              <div className="flex justify-between">
                <span className="text-xl font-bold">{title}</span>
                <button className="bg-gray-500 text-white p-2 rounded-md mr-2">
                  <span>Pin</span>
                </button>
              </div>
              <div className="flex justify-between items-center gap-2">
                <p>{text}</p>
                <div className="ml-auto">
                  <button className="bg-gray-500 text-white p-2 rounded-md m-2">
                    <span>Archive</span>
                  </button>
                  <button className="bg-gray-500 text-white p-2 rounded-md m-2">
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
  );
}
export default ShowNotes;