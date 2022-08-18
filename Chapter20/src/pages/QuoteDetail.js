import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

import HighlightedQuote from "../components${match.path}/HighlightedQuote";
import Comments from "../components/comments/Comments";
import LoadingSpinner from "../components/ui/LoadingSpinner";



const QuoteDetail = () => {
    const match = useRouteMatch();
    const params = useParams();

    const { quoteId } = params.

        const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true)
    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId])

    if (status === 'pending') {
        return <div className="centered">
            <LoadingSpinner />
        </div>
    }

    if (error) {
        return <p className='centered'>Error while getting data</p>
    }

    if (!loadedQuote.text) {
        return <p className='centered'>No quote</p>
    }

    const quote = DUMMY_QUOTES.find(quote =>
        quote.id === params.quoteId
    );

    if (!quote) {
        return (
            <p>No quote found!</p>
        )
    }

    return (
        <Fragment>
            <h1>Quote Detail Page</h1>
            <p>{params.quoteId}</p>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={`${match.path}/${params.quoteId}`} exact>
                <div className="centered">
                    <Link
                        className="btn_flat"
                        to={`${match.path}/${params.quoteId}/comments`}
                    >Load comments
                    </Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    )
}

export default QuoteDetail;