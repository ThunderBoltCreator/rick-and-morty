import type { ChangeEvent } from 'react'
import { useId, useState } from 'react'
import Loup from 'shared/icons/loup.tsx'
import Cross from 'shared/icons/cross.tsx'
import { BaseField, TextFieldProps } from 'shared/common/input/base.tsx'

export type SearchFieldProps = {
  onButtonClick?: () => void
} & Omit<TextFieldProps, 'leftIcon' | 'rightIcon' | 'type'> & {}

export function SearchField({ onButtonClick, onValueChange, value, ...props }: SearchFieldProps) {
  const id = useId()
  const [inputValue, setInputValue] = useState(value)

  const onChangeField = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value

    setInputValue(value)
    onValueChange?.(value)
  }

  const handleInputClear = () => {
    onValueChange?.('')
    setInputValue('')
  }

  const SearchIconLabel = (
    <label htmlFor={id}>
      <Loup />
    </label>
  )

  const SearchIconButton = (
    <button onClick={onButtonClick}>
      <Loup />
    </button>
  )

  const ClearInputIcon = (
    <button onClick={handleInputClear}>
      <Cross />
    </button>
  )

  return (
    <BaseField
      id={id}
      leftIcon={value ? SearchIconButton : SearchIconLabel}
      onChange={onChangeField}
      rightIcon={value ? ClearInputIcon : null}
      value={inputValue}
      {...props}
    />
  )
}
