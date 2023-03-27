export default function ProfileCard({ title, handle }) {
    return (
        <>
            <h1>Profile Card {title ? title : ''}</h1>
            <h4>{handle}</h4>
        </>
    );
}
