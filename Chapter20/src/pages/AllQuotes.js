import { useEffect } from 'react'
import NoQuotesFound from '../components/quotes/NoQuotesFound'
import QuoteList from '../components/quotes/QuoteList'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import useHttp from '../hooks/use-http'
import { getAllQuotes } from '../lib/api'

const DUMMY_QUOTES = [
    { id: `q1`, author: `author1`, text: `text 1111` },
    { id: `q2`, author: `author2`, text: `text 2222` },
    { id: `q3`, author: `author3`, text: `text 3333` },
    { id: `q4`, author: `author4`, text: `text 4444` },
]

const AllQuotes = () => {
    const { sendRequest, status, data: loadedQuotes, error } = useHttp(
        getAllQuotes, true
    )

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    if (status === `pending`) {
        <div className='centered'>
            <LoadingSpinner />
        </div>

    }
    if (error) {
        return <p className='centered'>Error while getting data</p>
    }
    if (status === `completed` && (!loadedQuotes || loadedQuotes.length === 0)) {
        return (
            <NoQuotesFound />
        )
    }

    return (
        <QuoteList quotes={loadedQuotes}></QuoteList>
    )
}

export default AllQuotes;