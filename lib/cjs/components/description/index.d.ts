interface DescriptionProps {
    text: string;
    variant?: 'description' | 'subtitle' | 'descriptionSubtitle';
}
declare const Description: ({ text, variant }: DescriptionProps) => JSX.Element;
export default Description;
