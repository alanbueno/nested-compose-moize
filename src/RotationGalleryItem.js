import React from 'react'
import PropTypes from 'prop-types'

import { GalleryCard, Form } from 'tabler-react'

const RotationGalleryItem = ({
  galleryItem: { imageUrl, avatarUrl, fullName, dateString, totalView, totalLike },
  index,
}) => (
  <GalleryCard>
    <a href={index}>
      <Form.ImageCheckItem
        imageURL={imageUrl}
        value={index}
        col={{ width: 12, sm: 12, md: 12, lg: 12 }}
      />
    </a>

    <GalleryCard.Footer>
      <GalleryCard.Details avatarURL={avatarUrl} fullName={fullName} dateString={dateString} />
      <GalleryCard.IconGroup>
        <GalleryCard.IconItem name="eye" label={totalView} />
        <GalleryCard.IconItem name="heart" label={totalLike} right />
      </GalleryCard.IconGroup>
    </GalleryCard.Footer>
  </GalleryCard>
)

RotationGalleryItem.propTypes = {
  galleryItem: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    dateString: PropTypes.string.isRequired,
    totalView: PropTypes.string.isRequired,
    totalLike: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
}

export default RotationGalleryItem
