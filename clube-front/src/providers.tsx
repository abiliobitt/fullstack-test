import {ReactElement} from 'react'
import {CustomersProvider} from './contexts/customers'

export default function Providers({children}: {children: ReactElement}): ReactElement {
  return <CustomersProvider>{children}</CustomersProvider>
}