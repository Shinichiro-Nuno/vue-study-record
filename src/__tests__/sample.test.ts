import { describe, expect, test } from "vitest";
import { render } from "@testing-library/vue";
import "@testing-library/jest-dom";
import AppVue from "../App.vue";

describe("Viteというテキストが表示されている", () => {
  test("Viteというテキストが表示されている", () => {
    const { getByText } = render(AppVue);
    expect(getByText("Vite")).toBeInTheDocument();
  });
});
