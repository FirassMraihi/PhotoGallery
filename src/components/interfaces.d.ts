export interface ThumbnailDescriptionProps {
  name: string;
  id?: number;
  comments?: Comment[];
}

export interface ImageThumbnailProps {
  id: number;
  uri: string;
  description: ThumbnailDescriptionProps;
  comments: Comment[];
}

export interface Comment {
  imageId?: string | null;
  id: string;
  user: string;
  avatar?: string;
  content: string;
  toggleUpdate?: () => void;
}
export interface InputCommentProps {
  placeholder?: string;
  value?: string;
  comments?: Comment[];
  imageId: number | null;
  handleSubmit?: (text: string) => void;
}
export interface fullScreenProps {
  toggleFullScreen: boolean;
  setToggleFullScreen: (status: boolean) => void;
  item: ImageThumbnailProps | undefined;
}
export interface fullScreenHeaderProps {
  title: string;
  handleClose: () => void;
}
export interface dimensions {
  height: number;
  width: number;
}
