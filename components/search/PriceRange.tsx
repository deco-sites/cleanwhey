import { useRef } from "preact/hooks";
import { Signal } from "@preact/signals";
import MultiRangeSlider from "../../islands/MultiRangeSlider.tsx";

export interface Props {
  min: number;
  max: number;
  selectedValuesSignal: Signal<number[]>;
}

function FilterPriceRange({ min, max, selectedValuesSignal }: Props) {
  const timeoutRef = useRef<number | undefined>();
  const currentMin = useRef<number>(selectedValuesSignal.value[0]);
  const currentMax = useRef<number>(selectedValuesSignal.value[1]);

  function handleChange(range: { min: number; max: number }) {
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      selectedValuesSignal.value = [range.min, range.max];
    }, 250);
  }

  return (
    <div class="h-10">
      <MultiRangeSlider
        min={min}
        max={max}
        currentMin={currentMin.current}
        currentMax={currentMax.current}
        onChange={handleChange}
      />
    </div>
  );
}

export default FilterPriceRange;
