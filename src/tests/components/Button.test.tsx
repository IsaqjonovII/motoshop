import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { Button } from 'components/Button';

describe('Button', () => {
    it('should render with provided children', () => {
        render(<Button>test</Button>);
        expect(screen.getByRole('button')).toHaveTextContent(/test/i);
    });

    it('should be disabled if disabled prop passed', () => {
        render(<Button disabled={true} >test</Button>);
        expect(screen.getByRole('button')).toHaveAttribute("disabled");
        userEvent.click(screen.getByRole('button'));

        expect(screen.getByRole('button')).not.toHaveBeenCalled();
    });

});
