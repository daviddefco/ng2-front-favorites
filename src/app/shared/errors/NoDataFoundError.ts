interface NoDataFoundError extends Error {
}

interface NoDataFoundErrorConstructor {
    new (message?: string): NoDataFoundError
    (message?: string): NoDataFoundError
    readonly prototype: NoDataFoundError
}

declare const NoDataFoundError: NoDataFoundErrorConstructor
