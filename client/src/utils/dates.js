const formatTime = async (time) => {
    if (!time) {
        return ''
    }

    const [hours, minutes] = time.split(':')
    const date = new Date()
    date.setHours(hours, minutes)

    return date.toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit'
    })
}

const formatRemainingTime = async (eventDateTime) => {
    if (!eventDateTime) {
        return ''
    }

    const eventTime = new Date(eventDateTime)
    const difference = eventTime - new Date()
    const absoluteDifference = Math.abs(difference)
    const days = Math.floor(absoluteDifference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((absoluteDifference / (1000 * 60 * 60)) % 24)

    if (difference < 0) {
        return `Happened ${days}d ${hours}h ago`
    }

    return `${days}d ${hours}h remaining`
}

const formatNegativeTimeRemaining = async (remaining, id) => {
    const remainingElement = document.getElementById(`remaining-${id}`)

    if (remainingElement && remaining.includes('Happened')) {
        remainingElement.classList.add('negative-time-remaining')
    }
}

export default {
    formatTime,
    formatRemainingTime,
    formatNegativeTimeRemaining
}
