import React from 'react';

const Header = () => {
    const clearLocalStorage = () => {
        if (window.confirm("Are you sure you want to clear all data?")) {
            localStorage.clear();
            window.location.reload(); 
        }
    };
    return (
        <div className='bg-[#1d2125] w-100 h-12 p-3 border-b bordered-box flex flex-row justify-between border-b-[#9fadbc29]'>
            <div className="left justify-center items-center flex">
                <h3 className='text-slate-50 text-xl font-bold'>My Trello </h3>
            </div>
            <div className="right flex items-center space-x-4">
                <span>Pranav Ahire</span>
                <a href="https://github.com/vish-ahire">
                <img className='rounded-full h-10' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAhFBMVEUbHyP///8AAAAYHCAVGh4TGB319fX4+PgRFhoAAAnx8fHu7u78/PwOExjDw8QAAAYACQ/X19fj4+OLjI0vMjW3uLjOzs6wsLEpLC9TVVfd3d55enuen6CXmJldXmAGDhWCg4Rubm4jJCY7PT9KS00VFRZDREamp6hnZ2kbHBwNDRE3Nzd7s5m+AAAJyUlEQVR4nO1daXOqShCFHlAQWWQVQQHFJfH//78nJrlRpAeVHs2rmvPhpio3CZyZ3rtnVBQJCQkJCQkJCQkJCQkJCQkJCQmJV4MZRVF4J5y+GOzdb/MsmG3CCUWYpunqhNOXo918x7T/X5yYB+BuqiBPHCeeLRYL3z/9M4sdJ8mDauMCeP8TQtpp8dMgmi2syVi9wXhiLWZRkJ62TXv3m/YCYJs5vjWa3vL4xXRk+U62BXj32/JQAGTxmMvjgtE4zk469e537gTTPaid+3j8wqnB0/+a/jB7G2aLR6k08MtQ+1v2rWD10nqGSgNrWbO/I20FrJ6n8kVn9UeUR4fd0h9CpYG/3IH+biYnW7wO4qFUGsTB+t2W2oCD0+Ean8HYOYDxTi7eRz5IWa5h5R/e+7jALr7TQ96Habx7l6gxyEaUVBqMM3iLzzEgoabSIHmH4njbmQguqjrbvlpxmFcP9i0Y/Pq12Y5uVxNRXFR1UtkvdKDGRymQy4lN+fEyxTHWgVAuJzbB+kVstK1oLg2bj5dk1exTrIx9YVR+vsIKuBVRMMbHuHLFczF3r6DSYGeK5mJ7r+Kiqp4tlosBhFFyHyyxkY32+XD9ZQicrUDnyWBJGvL3IhcYQ3fG/H5TTx4ofNYidpyOwHWUCctvvLqrMlYqyjzN8ujpwNNy9lkaKnba8RcWtaAQWl8nHUJ2inE1vQCYH4Kn9GmRV0eAQteMdUd+NE3WYtQGyq7EMpl/xR2a522qh+ksylQ3v22WV3b8wKgUImhF2pmNBb9yYEB4eChjs8pd8Vua9VZdkjpLBZQHmb7sep9JdSnUurcuW7Zgelbuxkj405aUJhv70pEYm86NXQoorHurTqvcXjjNnUc//5WU6fzcC/wHZVfljvXzm60aJvP2XU8YrchtgPbvHa/hbNoKasNqMXIy1ry81+rJ6rbbfHu1X0xyuHlH6Nx7NZpTZwP2ofNBaqLcCsF5EziRCDtvV8fvdVoYVT0Qx2gMq8XkhMbGzboTpdmWVmtcZGNIyZgZEkgcaFMbwPw7KZkKIeOT+hp3hXAhFjMsxFtRbg2gvjAnTAcxnTlpDeGSFTs08k8I7SYE2GOmKZ2vgW4f08DZ0GWDiJ9pEJFtjWbj6YpP5581BW8rWDaVAMCSU1zKyJTGrvHm6HhJtTW4+p+w7wgBnoOXcdaMygR4XSngP0QhVfbkZZwCg09kAiDnrNiCzs7oYVcm+40xjUNjvPKSVZF6AM5EQUzSgSpSfMBnnJNZmQZwwAV6QZJxAqfoH4ek0Tlz96hETwIKGeA0lSfUZS1jjUtBQvAsfY6rTExecIQA3RpnPtxseit0sUaU2v8FhhfmFwSxhovksip1mvEFCNClK4fnAZzoj0QlW9AA9TXDIxrGOus/ZygiKqeA+pq9NlRD9e7KXAMRUtZ4Aux5t1WtR2F3F2XPKyWEjLHGnjdLhzo174Cal5WYBiqqNNZhqDnzKtSYeYKaDZgojKrBZDKMiyqoqYXn6NlQMiaqj5YoMqj5LIeSKVAnJsaY8RxbMDBuRroyDRaCyJioYOcDM3S2Rjf99WT262FktDmaAAgjg2rp0IKjHqK2RZjOoFo6tHai4WSEWTNUS6Nw2M5wyIxebpqHkuGImTCniWrpYDHDDYAqaEgHr58ONQBMwdOZuZjZNjxxHmqamYYnmoImjgB94HJoduahhpK0A/gL3UAfGIgLNEl7c78APEwvhyZQnNL8VAwZ1OJMB6cAHucEw07EcUS0Sd+aOXoGRefc1BdEKI2OlgBUfzV08Xi9ORGhJh6ZqXE91BfwQoCRADnjtByH9+iYgXvNKX2xyavxM3n74XdwcMqz6oK8pgmcTiBBwxkfaDnJGXW1udjg5sbKhhfOkTnTL8xoO2e8xhbJ5Kmm4BZAndJaZ5fjB9RIIWif4smS2nSACGu0xpo3F01ibYCjNKrq0Aka2/LGWiySIN3ecQev92ui5jnzKt4kyGxHsmrAHYofLYnGQU3OvEEjAjTaCUvu4XKaBr0CnUdALtaMhozNMf7fzxm+N8CdNjpFmRsi3cTbjF+YRjDQpvVfLUAkZfgk+MW67QZdIwUQ9Rz/ojt5wpk0+Lc5+6375GkKvYD+I+wWXV2r7TfHo9HN9VJWcGSPn3zXbHt9z5kbwvjcDi+92dgpD6syWbRlz8pXoe3df+8SMwpznpb3HB8ah4QnNq9cjQ9gNucsgltb6gRVrYDZf/ufbntgb1ZZct8xQjL1b1BcHmieZGdt1+AY3RqGUbwPsnRTAH5bEQNww7QK/h0L6gdtSntlna3S+DxTVPJOzZ3MnGS/xOYpmNbcFfjQyc6YNm0q0qu3TXbnRMlY47OoERqzFXhdEQH1GbrrqdPp9/CXscaSHR8vq2uPXljjfNJyUezWoZNJfV6t4ogYo5oTExgfj131sKJuNzAlb7H5POsEku3wzY9ZPcIlZ+SNoKIdCX5rZfd0yJHrF7T1A+rvD679dcBs1xq/wiUNOkL3Gb8txPT89ncwBCKGp+ybMbqP85J581s2yx6HXaDHvm7gUMX+14D2+bZvxYDwhk1fidvY3XvgnnQ+/wLMbXmV8feRQ3fuXJunSd2zM/rxznsEx7kr6K4GO2y9ws+Qtl2UF3T8qJz3vAGviX39BOIq4wXM9FrQrMO3cmrmsVpG8WwWO3lwmPeu5o2hR2ClAu+egVZT8Pdcm2EW4a6ud0dm3jHuyHS8DXOBqbgrNJqXgOsV9S9Pg2qGbdt3ppvGXWREXm6iNGyu1SZ5Uj/vIkN/bqIF1mqgBs898B4yhHk/+hrbKyMwytxnMto7yFifL7ivzauv2EyD+RMDzv1kJqJunLmGubo20E4VwkUdg+l2v2/oJfPP6gsGM9vl+ig47JSfqz9YmNa9f6PPNFuV+aLrJ2/ZqH4c7fNlECzzfRLN9r2DYT1k/Op1V2kys7tfN/6O3frvI+GLmX941b40YGbNq931kmFcMov6lVxOMI+cFtQwMvHxNbp/AfsTjxUHkdlvBV8F2PlCUKFk+mZ2GUPnPt50YbMCG6RzF/WdD0XJ+G+7SlvxPvadbahnyYyS+RsvOTegmnX0vJy+YapuMrMM3qAuF4DN/tblPEXGT3ZvUpdf2LBK2tVz5wkDEFVAXVJ+Bm5Rtvqr/TujtMg4gfL2bfmC5oaZc02mb2euCxpxuflDH3qk2+HlTY39TvNyKj/ONnckDa+Ebq/r/Y+wBb3v5lU/Pxula/utH6HRCWYDVGcvGvVf5MmMs5xZJcDf+ligC7hgZqe88w75ZxBm2bzrZsA/BA3udXwG9xJECQkJCQkJCQkJCQkJCQkJCQkJCQkJibfgP8ENnGHgsArkAAAAAElFTkSuQmCC" alt="" />
                </a>
                <button
                    onClick={clearLocalStorage}
                    className="px-4 py-1 bg-red-600 hover:bg-red-500 rounded shadow-md hover:shadow-lg transition"
                >
                    Clear Data
                </button>
            </div>
        </div>
    );
}

export default Header;
