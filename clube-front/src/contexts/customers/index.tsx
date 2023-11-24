import {
    createContext,
    FC,
    PropsWithChildren,
    ReactElement,
    useCallback,
    useContext,
    useEffect,
    useState,
  } from 'react'
  import {
    createCustomer,
    getCustomers,
    updateCustomer
} from '../../services';
  
  import { CustomerType } from '../../types/CustomerType'
  
  interface CustomerTypesContext {
    customers?: CustomerType[]
    loading?: boolean
    getCustomers?: () => Promise<CustomerType[]>
    createCustomer: (data: CustomerType) => Promise<CustomerType>
  }
  const defaultValue: CustomerTypesContext = {
    customers: [],
    loading: false,
    createCustomer: createCustomer,
    getCustomers: getCustomers
  }
  export const CustomersContext = createContext<CustomerTypesContext | typeof defaultValue>(defaultValue)
  
  export const useCustomers = (): CustomerTypesContext => {
    const context = useContext(CustomersContext)
    if (context == null) {
      throw new Error('useCustomers must be used within an CustomersContext')
    }
  
    return context
  }
  
  export const CustomersProvider: FC<PropsWithChildren> = ({children}): ReactElement => {
    const [customers, setCustomers] = useState<CustomerType[]>([])
    const [loading, setLoading] = useState<boolean>(false)
  
    const getCustomersData = useCallback(async (): Promise<CustomerType[]> => {
      console.log('aqui')
      setLoading(true)
      const data = await getCustomers()
      setCustomers(data)
      setLoading(false)
      return data
    }, [setCustomers, setLoading])
  
    const createCustomer = useCallback(
      async (customer: CustomerType): Promise<CustomerType> => {
        setLoading(true)
        const data = await createCustomer(customer)
        setCustomers(customers => [...customers, customer])
        setLoading(false)
        return data
      },
      [setCustomers, setLoading],
    )
  
    useEffect(() => {
      getCustomersData()
    }, [getCustomersData])
    return (
      <CustomersContext.Provider
        value={{
          customers,
          loading,
          createCustomer,
        }}>
        {children}
      </CustomersContext.Provider>
    );
  }