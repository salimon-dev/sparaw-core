type alignment = "start" | "center" | "end";
type verticalAlignment = "top" | "center" | "end";
type colFlex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export interface IRowProps {
  align?: alignment;
  alignXS?: alignment;
  alignSM?: alignment;
  alignMD?: alignment;
  alignLG?: alignment;

  verticalAlign?: verticalAlignment;
  verticalAlignXS?: verticalAlignment;
  verticalAlignSM?: verticalAlignment;
  verticalAlignMD?: verticalAlignment;
  verticalAlignLG?: verticalAlignment;

  children?: any;
  style?: any;
  className?: string[] | string;
}
export interface IColProps {
  children?: any;
  style?: any;
  className?: string[] | string;

  col?: colFlex;
  colOffset?: colFlex;

  xs?: colFlex;
  sm?: colFlex;
  md?: colFlex;
  lg?: colFlex;

  xsOffset?: colFlex;
  smOffset?: colFlex;
  mdOffset?: colFlex;
  lgOffset?: colFlex;
}
export interface ICardProps {
  children?: any;
}
export interface ICardHeaderProps {
  children?: any;
}
export interface ICardBodyProps {
  children?: any;
}
export interface ICardFooterProps {
  children?: any;
}
export interface IButtonProps {
  children?: any;
  onClick?: () => void;
}
export interface IIconButtonProps {
  icon?: any;
  children?: any;
  onClick?: () => void;
}
export interface ITextInputProps {
  children?: any;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
}
export interface ISpaceProps {
  height?: number | string;
  width?: number | string;
}
export interface IImageProps {
  source: any;
  alt?: string;
  style?: any;
  className?: string;
}
