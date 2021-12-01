export default function CustomDot({ onClick, ...rest }) {
    const { active } = rest;

    return (
        <div
            className={`doc-image rounded-pill mx-1 mb-4 c-pointer ${active && "active" }`}
            onClick={() => onClick()}/>
    );
};