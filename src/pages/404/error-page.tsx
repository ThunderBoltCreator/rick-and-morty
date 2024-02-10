import { Button } from 'shared/common/button'
import { useNavigate } from 'react-router-dom'

export function Error404() {
  const navigate = useNavigate()

  const navigateToPrevPage = () => {
    navigate(-1)
  }

  return (
    <div>
      <h1>
        Error 404
        <br /> <strong>Page not found</strong>
      </h1>
      <Button variant={'secondary'} onClick={navigateToPrevPage}>
        Back to previous page
      </Button>
    </div>
  )
}
