// @flow

type Success = {| success: true |}
type Fail = {| success: false, error: Error|}
type Message = {content: string, timestamp: Date}
type ConsumerResponse = Success | Fail
type Consumer = (message: Message) => ConsumerResponse

const subscribe = (consumer: Consumer) => {
  const message = { content: 'I am a happy message', timestamp: new Date() }
  const response = consumer(message)

  if(response.success) {
    console.log('Message processed with success')
  }

  if(!response.success) {
    console.log('Trying again...', response.error)
  }
}

module.exports = {subscribe}
