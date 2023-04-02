export default function ImageShow({ image }) {
    console.log(`${image.alt_description}`, image);
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image">
                    <img src={image.urls.small} alt={image.alt_description} />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            <img
                                src={image.user.profile_image.small}
                                alt={image.user.username}
                            />
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{image.user.name}</p>
                        <p className="subtitle is-6">@{image.user.username}</p>
                    </div>
                </div>

                <div className="content">
                    <span>{image.alt_description}</span>
                    <br />
                    <time datetime={image.updated_at}>{image.updated_at}</time>
                </div>
            </div>
        </div>
    );
}
