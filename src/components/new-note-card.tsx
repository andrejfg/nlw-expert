export function NewNoteCard(){
  return(
    <div className="rounded-md bg-slate-800 p-5 space-y-3">
      <span className="text-slate-200 text-sm font-medium">Adicionar nota</span>
      <p className="text-slate-400 text-sm font-normal leading-6 overflow-hidden">Grave uma nota em áudio que será convertida para texto automaticamente.</p>
    </div>
  )
}