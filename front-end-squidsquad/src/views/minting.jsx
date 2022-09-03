// Since we are pre generating. to mitigate or slow down a potential leak, metadata wont be published to ipfs until the minting proccess is being initiated. 
// which means we must first gather and save our image and metadata to create our token URI which we will mint on the blockchain.

// 1) get image image and save to ipfs and save the reurned ipfs url

// 2) set metadata object { image-ipsf-url, name, type, birthplace }

// 3) call our mint function from our deployed contract/ possibly have to call setMetadata?

// 4) remove inc sac and display the new squid
import React from 'react'

export default function Minting() {
  return (
    <div>Coming Soon!</div>
  )
}
