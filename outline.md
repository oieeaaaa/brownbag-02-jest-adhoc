## Outline

---

### Setup
  1. Jest
### Jest Matchers
  1. Common matchers
    1. toBe
    1. toEqual
    1. .not
  1. Truthiness
    1. toBeNull
    1. toBeUndefined
    1. toBeDefined
    1. toBeTruthy <!--- base on if statement's return -->
    1. toBeFalsy
  1. Numbers
    1. toBeGreaterThan
    1. toBeGreaterThanOrEqual
    1. toBeLessThan
    1. toBeLessThanOrEqual
    1. toBeCloseTo <!--- useful for rounding errors e.g., 0.1 + 0.2 -->
  1. Strings
    1. toMatch
  1. Arrays
    1. toContain
### Testing Asnychronous Code
  1. Callbacks
    1. Using done
  1. Promises
    1. Returning .then
    1. Returning .catch but with expect.assertions
    1. Returning .resolves
    1. Returning .rejects
  1. Async/Await <!-- a syntactic sugar for promises -->
    1. Await
    1. Catching Error
    1. Await .resolves
    1. Await .rejects
### Setup and Teardown
  1. beforeEach
  1. afterEach
  1. beforeAll
  1. AfterAll
  1. Handling Asnychronous Code
  1. Scoping with describe()
  1. .only <!-- specify the file when running the jest command to get more info -->
### Mock Functions
  1. Creating a mock
    1. jest.fn()
    1. jest.mock
    1. jest.spyOn
  1. Using the .mock property
    1. results
    1. calls
    1. instances
  1. Mock Return Values
    1. mockReturnValue
    1. mockImplementation
    1. mockReturnValueOnce
    1. mockImplementationOnce
  1. Other Ways Of Mocking
    1. mockReturnThis
    1. mockName <!-- replaced the jest.fn() in the test error output -->
  1. Custom Matchers
    1. toHaveBeenCalled
    1. toHaveBeenCalledWith
    1. toHaveBeenNthCalledWith
  1. Resetting Mocks
    1. mockFn.clearMock()
    1. mockFn.clearAllMocks()
    1. jest.resetModules()
    1. jest.unmock(module)
### Other Jest Stuff That Might Be Useful On A Daily Basis
  1. Snapshots
    1. toMatchSnapshot
    1. toMatchInlineSnapshot
  1. Lazy Expect
    1. expect.anything() <!-- useful for pure functions (i.e., map, filter, reduce, etc...) -->
    1. expect.any(constructor)
