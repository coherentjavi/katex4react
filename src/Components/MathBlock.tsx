import Katex from 'katex';



export interface BlockComponentProps {
    math: string;
    font?: string;
    displayMode?: boolean;
};

export interface InlineComponentProps {
    math: string;
}

export function MathBlock(props: BlockComponentProps){
        const block = Katex.renderToString(props.math, {displayMode: true})
    return(
        <div>
            {block}
        </div>)
};

