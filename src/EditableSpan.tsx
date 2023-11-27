import React, {ChangeEvent, FC, useState} from "react";
import {TextField} from "@material-ui/core";

type EditablePropsType = {
    title: string,
    onChange: (newValue: string) => void
}

export const EditableSpan: FC< EditablePropsType> = React.memo(({
    title,
    onChange
}) =>{
    let [editMode, setEditMode] = useState(false);
    let [localTitle, setLocalTitle] = useState("");
    const activateEditMode = () => {
        setEditMode(true);
        setLocalTitle(title);
    };
    const activateViewMode = () => {
        setEditMode(false)
        onChange(localTitle);
    };
    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => setLocalTitle(e.currentTarget.value)
    return editMode
        ? <TextField value={localTitle}  onChange={onChangeTitle} onBlur={activateViewMode} autoFocus/>
        :
        <span onDoubleClick={activateEditMode}>{title}</span>
})