/**
 * @jest-environment jsdom
 */
import { screen } from '@testing-library/dom';
import Block from '../Block';

describe('Проверка класса Block', () => {
  const testProps  = {value: 'Test render 1'}
  const testNewProps  = {value: 'Test render 2'}

  class TestBlock extends Block<Indexed> {
    static componentName = 'TestComponent';

    render(): string {
      return `<button>${this.props.value}</button>
      `;
    }
  }
  const testComponent = new TestBlock(testProps);

  beforeEach(() => {
    const element = testComponent.getContent();
    document.body.appendChild(element);
  });

  afterEach(()=>{
    document.body.replaceChildren()
  })

  it('Должен рендерить разметку', () => {
    const result = screen.getByRole('button');

    expect(result).toBeInTheDocument();
  });

  it('Должен устанавливать новые пропсы', () => {
    const resultBefore = screen.getByText(testProps.value, { selector: 'button' });
    expect(resultBefore).toBeInTheDocument();

    testComponent.setProps(testNewProps);
    const resultAfter = screen.getByText(testNewProps.value, { selector: 'button' });
    expect(resultAfter).toBeInTheDocument();
  });
});
