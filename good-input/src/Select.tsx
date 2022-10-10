import { useEffect, useRef, useState } from 'react';
import styles from './select.module.css';

export type SelectOption = {
  label: string;
  value: string | number;
}

type MultipleSelectProps = {
  multiple: true;
  value: SelectOption[]; 
  onChange: (value: SelectOption[]) => void;
}

type SingleSelectProps = {
  multiple?: false;
  value?: SelectOption; 
  onChange: (value?: SelectOption) => void;
}

type SelectProps = {
  options:  SelectOption[];
} & (SingleSelectProps | MultipleSelectProps);

export function Select({multiple, value, onChange, options} : SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  function clearOptions() {
    multiple ? onChange([]) : onChange(undefined);
  }

  function selectOption(option: SelectOption) {
    if (multiple) {
      if (value.includes(option)) {
        onChange(value.filter(o => o !== option))
      } else {
        onChange([...value, option])
      }
    } else {
      if (option !== value) onChange(option)
    }
  }

  function isOptionSelected(option: SelectOption) {
    return multiple ? value.includes(option) : option === value;
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen])

  // 用键盘来操控输入框  这是一个亮点
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target != containerRef.current) return;
      console.log('e.target', e.target);
      console.log('e.code', e.code);
      switch (e.code) {
        case "Enter":
        case "Space":
          setIsOpen(prev => !prev)
          if (isOpen) selectOption(options[highlightedIndex])
          break
        case "ArrowUp":
        case "ArrowDown": {
          if (!isOpen) {
            setIsOpen(true)
            break
          }

          const newValue = highlightedIndex + (e.code === "ArrowDown" ? 1 : -1);
          console.log('newValue', newValue)
          if (newValue >= 0 && newValue < options.length) {
            setHighlightedIndex(newValue)
          }
          break
        }
        case "Escape":
          setIsOpen(false)
          break
      }
    }
    // 键盘事件
    containerRef.current?.addEventListener("keydown", handler);

    return () => containerRef.current?.removeEventListener("keydown", handler)
  }, [isOpen, highlightedIndex, options])


  return (
    // 为了让focus起效，需要给标签加一个tab
    // onBlur 是用户点击失去焦点的时候会发生
    <div 
      tabIndex={1} 
      onClick={() => setIsOpen(prev => !prev)} 
      onBlur={() => setIsOpen(false)}
      className={styles.container}
      ref={containerRef}
    >
      <span className={styles.value}>
        {multiple 
        ? value.map(v => (
            <button key={v.value} onClick={(e) => {
              e.stopPropagation();
              selectOption(v)
            }} className={styles['option-badge']}>
              {v.label} 
              <span className={styles['remove-btn']}>&times;</span>
            </button>
          )) 
        :value?.label}
      </span>
      <button onClick={e => {
        // 阻止捕获和冒泡阶段中当前事件的进一步传播
        e.stopPropagation();
        clearOptions();
      }} className={styles["close-btn"]}>&times;</button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`} >
        {options.map((option, index) => (
          <li 
            key={option.value} 
            className={`${styles.option} ${isOptionSelected(option) ? styles.selected : ""} ${index === highlightedIndex ? styles.highlighted : ""}`} 
            onClick={e => {
              e.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
            onMouseEnter={e => {
              setHighlightedIndex(index);
            }}
          >{option.label}</li>
        ))}
      </ul>
    </div>
  )
}