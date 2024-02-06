type NoteCardProps = {
  tempo:string
  conteudo?:string
}

export function NoteCard({conteudo, tempo}:NoteCardProps){
  return(
  <button className="focus-visible:ring-2 focus-visible:ring-lime-400 outline-none rounded-md text-left bg-slate-700 p-5 space-y-3 relative overflow-hidden hover:ring-2 hover:ring-slate-600">
    <span className="text-slate-300 text-sm font-medium">{tempo}</span>
    <p className="text-slate-400 text-sm font-normal leading-6 ">{conteudo || "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam accusantium, quo, vitae magni error aliquam exercitationem, neque tenetur a reprehenderit inventore nisi ad soluta magnam asperiores ipsa placeat omnis commodi. Ipsam accusantium, quo, vitae magni error aliquam exercitationem, neque tenetur a reprehenderit inventore nisi ad soluta magnam asperiores ipsa placeat omnis commodi. Ipsam accusantium, quo, vitae magni error aliquam exercitationem, neque tenetur a reprehenderit inventore nisi ad soluta magnam asperiores ipsa placeat omnis commodi."}</p>
    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 rounded-md pointer-events-none"/>
  </button>
  )
}