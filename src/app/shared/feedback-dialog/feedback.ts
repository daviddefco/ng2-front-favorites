export interface Feedback {
    title: string
    message: string
    type: FeedbackType
}

type FeedbackType  = "success" | "danger" | "info" | "warning" | "primary" 