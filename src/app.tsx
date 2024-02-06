import logo from "./assets/logo-nlw-experts.svg"
import { NewNoteCard } from "./components/new-note-card"
import { NoteCard } from "./components/note-card"

export function App() {

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} />
      <form className="w-full">
        <input 
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
        />
      </form>
      <div className="h-px bg-slate-700"/>

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard/>
        <NoteCard tempo="há 2 dias"/>
        <NoteCard tempo="há 4 dias"/>
        <NoteCard tempo="há 5 dias"/>
        <NoteCard tempo="há 8 dias"/>
        <NoteCard tempo="há 9 dias"/>
      </div>
    </div>
  )
}
