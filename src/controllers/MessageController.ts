class MessageController {
  protected getActiveSocket() {
    const state = window.store.getState();
    const currentChat = state.activeChat;
    if (currentChat) {
      return state.sockets[currentChat.id];
    }
    return;
  }

  public getMessages(index: number) {
    const currentSocket = this.getActiveSocket();
    if (!currentSocket) {
      return;
    }
    currentSocket.send(
      JSON.stringify({
        content: index,
        type: 'get old',
      })
    );
  }

  public sendMessage(message: string) {
    const currentSocket = this.getActiveSocket();
    if (!currentSocket) {
      return;
    }

    currentSocket.send(
      JSON.stringify({
        content: message,
        type: 'message',
      })
    );
  }
}

export default new MessageController();
