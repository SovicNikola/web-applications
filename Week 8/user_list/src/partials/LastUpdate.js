import React from 'react'
import TimeAgo from 'react-time-ago'
import jsTimeAgo from 'javascript-time-ago'

// Load locale-specific relative date/time formatting rules.
import en from 'javascript-time-ago/locale/en'

// Add locale-specific relative date/time formatting rules.
jsTimeAgo.locale(en)


const LastUpdate = ({ date }) => {
    return (
        <span>
            Last update:
      <TimeAgo>{date}</TimeAgo>
        </span>
    )
}
export default LastUpdate