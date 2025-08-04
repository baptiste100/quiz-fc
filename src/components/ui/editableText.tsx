import { useState } from "react"
import {Check, Pencil, SquareX} from "lucide-react"

interface EditableTextProps {
    value: string,
    onUpdate: (newText: string) => Promise<void>
}

enum EditableTextState {
    Display,
    Editing,
    Saving
}

export function EditableText({ value, onUpdate } : EditableTextProps) {
    const [state, setState] = useState<EditableTextState>(EditableTextState.Display)
    const [error, setError] = useState<string>("")

    async function handleUpdate(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        setState(EditableTextState.Saving);

        try {
            await onUpdate(String(formData.get("text")));
            setState(EditableTextState.Display);
        } catch (err) {
            setState(EditableTextState.Editing);
            setError(err instanceof Error ? err.message : "error");
        }

    }

    return <>
        {
            state == EditableTextState.Display && (
                <div className="flex gap-3 items-center">
                    {value}
                    <Pencil className="cursor-pointer" onClick={() => setState(EditableTextState.Editing)}/>
                </div>
            )
        }
        {
            state != EditableTextState.Display && (
                <div>
                    <form onSubmit={handleUpdate} className="flex gap-2">
                        <input className="min-w-0 px-2 py-1 border rounded" size={value.length + 2} name="text" defaultValue={value} autoFocus></input>
                        <button type="button" className='cursor-pointer' onClick={() => {
                            setState(EditableTextState.Display);
                            setError("");
                        }}><SquareX/></button>
                        <button type="submit" className='cursor-pointer' disabled={state == EditableTextState.Saving}><Check/></button>
                    </form>
                    {error ? <p className="error">{error}</p> : null}
                </div>
            )
        }
    </>
}


